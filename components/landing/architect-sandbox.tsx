"use client";

import React, { useState, useEffect, useRef } from "react";
import { Plus, X, Box, Check } from "lucide-react";
import 'jointjs/dist/joint.css';

const availableModules = [
  { id: "ecomm", label: "E-commerce", color: "#e63946" },
  { id: "auth", label: "User Auth", color: "#457b9d" },
  { id: "blog", label: "Blog & CMS", color: "#2a9d8f" },
  { id: "seo", label: "Advanced SEO", color: "#f4a261" },
  { id: "admin", label: "Custom Admin", color: "#1d3557" },
  { id: "pay", label: "Payment Gateway", color: "#2a9d8f" },
  { id: "crm", label: "CRM Integration", color: "#e63946" },
];

export function ArchitectSandbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [addedModules, setAddedModules] = useState<string[]>([]);
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<any>(null);
  const graphRef = useRef<any>(null);
  const coreNodeRef = useRef<any>(null);

  // We need to keep joint loaded
  const jointRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    import('jointjs').then((module) => {
      if (!isMounted) return;
      if (!canvasRef.current) return;

      const joint = module.default || module;
      jointRef.current = joint;
      
      const graph = new joint.dia.Graph();
      graphRef.current = graph;

      const isMobile = window.innerWidth < 768;
      
      const paper = new joint.dia.Paper({
        el: canvasRef.current,
        model: graph,
        width: '100%',
        height: '100%',
        gridSize: 10,
        drawGrid: { name: 'dot', args: { color: '#e0e0e0', thickness: 1 } },
        interactive: { elementMove: true, linkMove: false },
        background: { color: '#FAFAFA' },
        defaultConnectionPoint: { name: 'boundary' }
      });
      
      if (isMobile) {
        // Zoom out on mobile so items don't spawn off-screen
        paper.scale(0.65, 0.65);
      }
      
      paperRef.current = paper;

      // Create Core Node
      // Since scale affects coordinate system, we calculate center considering the scale
      const scale = isMobile ? 0.65 : 1;
      const centerW = (canvasRef.current.clientWidth / scale) / 2;
      const centerH = (canvasRef.current.clientHeight / scale) / 2;

      const coreNode = new joint.shapes.standard.Rectangle();
      coreNode.position(centerW - 60, centerH - 30);
      coreNode.resize(120, 60);
      coreNode.attr({
        body: { fill: '#000', stroke: '#000', rx: 8, ry: 8 },
        label: { text: 'Core Platform', fill: '#fff', fontSize: 12, fontWeight: 'bold', fontFamily: 'system-ui' }
      });
      coreNode.addTo(graph);
      coreNodeRef.current = coreNode;

      const handleResize = () => {
        if (!canvasRef.current || !paperRef.current) return;
        paperRef.current.setDimensions(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        isMounted = false;
        window.removeEventListener('resize', handleResize);
        if (paperRef.current) {
          paperRef.current.remove();
        }
      };
    }).catch(err => console.error(err));
  }, [isOpen]);

  const addModuleToCanvas = (mod: typeof availableModules[0]) => {
    if (addedModules.includes(mod.id)) return;
    setAddedModules(prev => [...prev, mod.id]);

    const joint = jointRef.current;
    const graph = graphRef.current;
    const coreNode = coreNodeRef.current;
    if (!joint || !graph || !coreNode || !canvasRef.current) return;

    const isMobile = window.innerWidth < 768;

    // Calculate a random circular position around the core node
    const angle = Math.random() * Math.PI * 2;
    const radius = isMobile ? (100 + Math.random() * 20) : (140 + Math.random() * 40);
    const corePos = coreNode.position();
    const x = corePos.x + 60 + Math.cos(angle) * radius - 50; // offset by half width
    const y = corePos.y + 30 + Math.sin(angle) * radius - 20; // offset by half height

    const node = new joint.shapes.standard.Rectangle();
    node.position(x, y);
    node.resize(110, 40);
    node.attr({
      body: { fill: '#fff', stroke: mod.color, strokeWidth: 2, rx: 6, ry: 6 },
      label: { text: mod.label, fill: '#333', fontSize: 11, fontWeight: '600', fontFamily: 'system-ui' }
    });
    node.addTo(graph);

    // Animate pop in
    node.transition('position/x', x, { duration: 400, timingFunction: joint.util.timing.bounce });

    const link = new joint.shapes.standard.Link();
    link.source(coreNode);
    link.target(node);
    link.attr({
      line: {
        stroke: '#ccc', strokeWidth: 1.5, strokeDasharray: '4 4',
        targetMarker: { 'type': 'path', 'd': 'M 6 -3 0 0 6 3 Z', 'fill': '#ccc', 'stroke': 'none' }
      }
    });
    link.addTo(graph);
  };

  return (
    <section className="px-5 py-8 md:px-8 max-w-7xl mx-auto w-full mb-12">
      {!isOpen ? (
        <div className="border border-black/10 bg-black/5 p-8 text-center rounded-2xl transition-all hover:bg-black/[0.07]">
          <Box className="mx-auto text-black/40 mb-4" size={32} />
          <h3 className="font-unbounded text-xl mb-2">Want to build it yourself?</h3>
          <p className="text-sm text-[var(--ink-soft)] mb-6 max-w-md mx-auto">
            Open our interactive architecture sandbox to map out the exact features you need before contacting us.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full bg-black text-white px-6 py-3 font-unbounded text-sm hover:scale-105 transition-transform"
          >
            Launch Architecture Sandbox
          </button>
        </div>
      ) : (
        <div className="border border-black/20 rounded-2xl overflow-hidden bg-white shadow-xl transition-all">
          <div className="flex justify-between items-center p-4 border-b border-black/10 bg-[#FAFAFA]">
            <div>
              <h3 className="font-unbounded font-bold">Architecture Sandbox</h3>
              <p className="text-xs text-[var(--ink-soft)]">Click modules to add them to your core platform</p>
            </div>
            <button onClick={() => {
              setIsOpen(false);
              setAddedModules([]); // Optional: reset on close
            }} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row h-[750px] md:h-[600px]">
            {/* Toolbox */}
            <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-black/10 bg-[#FAFAFA] p-4 flex flex-col z-20 shadow-[2px_0_10px_rgba(0,0,0,0.03)] h-auto md:h-full">
              <div className="flex justify-between items-center mb-3 md:mb-2">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-black/50 font-bold">Available Modules</h4>
              </div>
              
              {/* Modules List - Horizontal scroll on mobile, vertical on desktop */}
              <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-y-auto pb-2 md:pb-0 hide-scrollbar snap-x">
                {availableModules.map(mod => {
                  const isAdded = addedModules.includes(mod.id);
                  return (
                    <button
                      key={mod.id}
                      onClick={() => addModuleToCanvas(mod)}
                      disabled={isAdded}
                      className={`flex items-center justify-between p-3 rounded border text-left transition-all flex-shrink-0 snap-start min-w-[160px] md:min-w-0 ${
                        isAdded 
                          ? 'bg-black/5 border-transparent opacity-50 cursor-not-allowed' 
                          : 'bg-white border-black/10 hover:border-black/30 hover:shadow-sm'
                      }`}
                    >
                      <span className="font-medium text-sm text-black/80">{mod.label}</span>
                      {isAdded ? <Check size={16} className="text-green-600 ml-3" /> : <Plus size={16} className="text-black/40 ml-3" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 md:mt-auto pt-4 border-t border-black/10 hidden md:block">
                <p className="text-xs text-[var(--ink-soft)] mb-3">
                  Done mapping out your platform?
                </p>
                <button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-[var(--accent)] text-white rounded py-2.5 text-sm font-unbounded hover:opacity-90 transition-opacity"
                >
                  Proceed to Contact
                </button>
              </div>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 relative bg-[#FAFAFA] h-[60%] md:h-full">
              <div ref={canvasRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing overflow-hidden" />
              {addedModules.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-black/30 font-caveat text-2xl">Select a module to begin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
