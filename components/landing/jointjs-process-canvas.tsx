"use client";

import React, { useEffect, useRef } from 'react';
import 'jointjs/dist/joint.css';

export function JointJSProcessCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<any>(null);
  const graphRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    import('jointjs').then((module) => {
      if (!isMounted) return;
      if (!canvasRef.current) return;

      const joint = module.default || module;
      const graph = new joint.dia.Graph();
      graphRef.current = graph;
      
      // Fallback width/height in case it's 0 on initial mount
      const width = canvasRef.current.clientWidth || 1000;
      const height = canvasRef.current.clientHeight || 450;

      const paper = new joint.dia.Paper({
        el: canvasRef.current,
        model: graph,
        width: '100%',
        height: '100%',
        gridSize: 1,
        drawGrid: false,
        interactive: { elementMove: true, linkMove: false },
        background: {
          color: 'transparent'
        },
        defaultConnectionPoint: { name: 'boundary' }
      });
      paperRef.current = paper;

      // Premium Styling definitions
      const styles = {
        main: {
          fill: '#000000',
          stroke: '#333333',
          textColor: '#ffffff',
          rx: 8,
          fontSize: 12,
        },
        child: {
          fill: '#FAFAFA',
          stroke: '#E0E0E0',
          textColor: '#666666',
          rx: 4,
          fontSize: 10,
        },
        accent: {
          fill: 'var(--accent, #e63946)', // Fallback if var not resolved
          stroke: 'none',
          textColor: '#ffffff',
          rx: 8,
          fontSize: 12
        }
      };

      const createNode = (x: number, y: number, label: string, type: 'main' | 'child' | 'accent' = 'main', id?: string) => {
        const rect = new joint.shapes.standard.Rectangle(id ? { id } : {});
        
        const isMain = type === 'main' || type === 'accent';
        const w = isMain ? 130 : 110;
        const h = isMain ? 45 : 35;
        
        const style = styles[type];

        rect.position(x, y);
        rect.resize(w, h);
        rect.attr({
          body: {
            fill: style.fill,
            stroke: style.stroke,
            strokeWidth: 1,
            rx: style.rx,
            ry: style.rx,
            cursor: 'pointer'
          },
          label: {
            text: label,
            fill: style.textColor,
            fontSize: style.fontSize,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: isMain ? '600' : '500',
            cursor: 'pointer',
            letterSpacing: 0.5
          }
        });
        rect.addTo(graph);
        return rect;
      };

      const createLink = (source: any, target: any, isChild = false) => {
        const link = new joint.shapes.standard.Link();
        link.source(source);
        link.target(target);
        link.attr({
          line: {
            stroke: isChild ? '#cccccc' : '#000000',
            strokeWidth: isChild ? 1.5 : 2,
            strokeDasharray: isChild ? '2 2' : 'none',
            targetMarker: {
              'type': 'path',
              'd': isChild ? 'M 6 -3 0 0 6 3 Z' : 'M 10 -5 0 0 10 5 Z',
              'fill': isChild ? '#cccccc' : 'none',
              'stroke': 'none'
            }
          }
        });
        
        if (!isChild) {
           link.attr('line/strokeDasharray', '5 5');
           link.attr('line/targetMarker/fill', '#000000');
        }
        
        link.addTo(graph);
        return link;
      };

      // Layout calculations
      const isMobile = width < 768;
      
      const nStartX = isMobile ? (width / 2) - 65 : Math.max(width * 0.05, 20);
      const nEndX = isMobile ? nStartX : Math.min(width * 0.95 - 130, width - 150);
      
      const nStepX = isMobile ? 0 : (nEndX - nStartX) / 3;
      const nStepY = isMobile ? 180 : 0;
      
      const mainY = 40; 

      // 1. Create Main Nodes
      const n1 = createNode(nStartX, mainY, "01. Consult", "main", "n1");
      const n2 = createNode(nStartX + nStepX, mainY + nStepY, "02. Design", "main", "n2");
      const n3 = createNode(nStartX + nStepX * 2, mainY + nStepY * 2, "03. Develop", "main", "n3");
      const n4 = createNode(nEndX, mainY + nStepY * 3, "04. Launch", "accent", "n4");

      // 2. Create Main Links
      createLink(n1, n2);
      createLink(n2, n3);
      createLink(n3, n4);

      const childData: Record<string, { parent: any, labels: string[] }> = {
        n1: { parent: n1, labels: ["Discovery", "Strategy", "Planning"] },
        n2: { parent: n2, labels: ["Wireframes", "Prototyping", "UI/UX"] },
        n3: { parent: n3, labels: ["Frontend", "Backend", "Integrations"] },
        n4: { parent: n4, labels: ["QA Testing", "Deployment", "Handoff"] }
      };

      // Create all children by default
      Object.keys(childData).forEach(key => {
        const data = childData[key];
        const parentPos = data.parent.position();
        
        data.labels.forEach((text, idx) => {
          let cx, cy;
          if (isMobile) {
            // Zigzag horizontally slightly, stack vertically tight
            cx = parentPos.x + (idx % 2 === 0 ? 15 : -5);
            cy = parentPos.y + 60 + (idx * 40);
          } else {
            // Stagger them vertically below parent, slight zigzag
            cx = parentPos.x + (idx % 2 === 0 ? 10 : -10);
            cy = parentPos.y + 70 + (idx * 55);
          }
          
          const childNode = createNode(cx, cy, text, 'child');
          createLink(data.parent, childNode, true);
        });
      });

      // Hover Effects
      paper.on('cell:mouseenter', (cellView: any) => {
        const el = cellView.model;
        if (el.isElement()) {
          // simple hover visual
          el.attr('body/stroke', 'var(--accent, #e63946)');
        }
      });

      paper.on('cell:mouseleave', (cellView: any) => {
        const el = cellView.model;
        if (el.isElement()) {
          const type = el.get('id') ? 'main' : 'child';
          const isAccent = childData[el.get('id') as string]?.parent === n4;
          
          // Revert styling based on node type
          if (isAccent) {
             el.attr('body/stroke', styles.accent.stroke);
          } else if (childData[el.get('id') as string]) {
             el.attr('body/stroke', styles.main.stroke);
          } else {
             el.attr('body/stroke', styles.child.stroke);
          }
        }
      });

      const handleResize = () => {
        if (!canvasRef.current || !paperRef.current) return;
        const newWidth = canvasRef.current.clientWidth;
        const newHeight = canvasRef.current.clientHeight;
        paperRef.current.setDimensions(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        isMounted = false;
        window.removeEventListener('resize', handleResize);
        if (paperRef.current) {
          paperRef.current.remove();
        }
      };
    }).catch(err => {
      console.error("JointJS Failed to load", err);
    });
  }, []);

  return (
    <>
      <div 
        className="absolute inset-0 z-10 w-full h-full cursor-grab active:cursor-grabbing"
        ref={canvasRef}
      />
      <div className="absolute top-4 left-6 z-20 pointer-events-none">
        <p className="text-[10px] uppercase tracking-widest text-black/50 font-bold bg-white/80 px-2 py-1 rounded border border-black/5 backdrop-blur inline-block">
          Interactive Architecture Map
        </p>
      </div>
    </>
  );
}
