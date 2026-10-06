"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { COUNTRIES, flagEmoji, type Country } from "@/data/countries";

interface CountrySelectProps {
 value: Country;
 onChange: (country: Country) => void;
 /** "country" = full-width country picker, "dial" = compact dialing-code picker */
 mode?: "country" | "dial";
 id?: string;
}

const TRIGGER_BASE =
 "flex items-center justify-between gap-2 px-3 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#070D1C] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm cursor-pointer";

export function CountrySelect({ value, onChange, mode = "country", id }: CountrySelectProps) {
 const [open, setOpen] = useState(false);
 const [query, setQuery] = useState("");
 const containerRef = useRef<HTMLDivElement>(null);
 const searchRef = useRef<HTMLInputElement>(null);

 useEffect(() => {
  if (!open) return;
  const onPointerDown = (e: PointerEvent) => {
   if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
    setOpen(false);
    setQuery("");
   }
  };
  const onKey = (e: KeyboardEvent) => {
   if (e.key === "Escape") {
    setOpen(false);
    setQuery("");
   }
  };
  document.addEventListener("pointerdown", onPointerDown);
  document.addEventListener("keydown", onKey);
  return () => {
   document.removeEventListener("pointerdown", onPointerDown);
   document.removeEventListener("keydown", onKey);
  };
 }, [open ]);

 useEffect(() => {
  if (open) searchRef.current?.focus();
 }, [open ]);

 const filtered = useMemo(() => {
  const q = query.trim().toLowerCase();
  if (!q) return COUNTRIES;
  const qDigits = q.replace(/\D/g, "");
  return COUNTRIES.filter((c) => {
   if (c.name.toLowerCase().includes(q)) return true;
   if (c.code.toLowerCase().startsWith(q.replace(/^\++/, ""))) return true;
   if (qDigits && c.dial.startsWith(qDigits)) return true;
   return false;
  });
 }, [query]);

 const select = (c: Country) => {
  onChange(c);
  setOpen(false);
  setQuery("");
 };

 return (
  <div ref={containerRef} className={`relative ${mode === "country" ? "w-full" : "w-[8.5rem] flex-shrink-0"}`}>
   <button
    type="button"
    id={id}
    aria-haspopup="listbox"
    aria-expanded={open}
    onClick={() => setOpen((o) => !o)}
    className={`${TRIGGER_BASE} ${mode === "country" ? "w-full" : "w-full"}`}
   >
    <span className="flex items-center gap-2 min-w-0">
     <span className="text-base leading-none" aria-hidden="true">
      {flagEmoji(value.code)}
     </span>
     {mode === "country" ? (
      <>
       <span className="truncate font-medium">{value.name}</span>
       <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex-shrink-0">+{value.dial}</span>
      </>
     ) : (
      <span className="font-mono font-semibold">+{value.dial}</span>
     )}
    </span>
    <ChevronDown className={`w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
   </button>

   {open && (
    <div className="absolute z-50 mt-2 left-0 right-0 sm:right-auto sm:w-[21rem] rounded-xl border border-slate-200 dark:border-[#24365C] bg-white dark:bg-[#0A1226] shadow-2xl overflow-hidden">
     <div className="p-2 border-b border-slate-100 dark:border-[#1A2A4E]">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-[#0E1830]">
       <Search className="w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0" />
       <input
        ref={searchRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country, code or +dial..."
        className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none"
       />
      </div>
     </div>
     <ul role="listbox" className="max-h-60 overflow-y-auto py-1">
      {filtered.length === 0 && (
       <li className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        No countries found for &ldquo;{query}&rdquo;
       </li>
      )}
      {filtered.map((c) => {
       const selected = c.code === value.code;
       return (
        <li key={c.code}>
         <button
          type="button"
          role="option"
          aria-selected={selected}
          onClick={() => select(c)}
          className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors ${
           selected
            ? "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300"
            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#12203A]"
          }`}
         >
          <span className="text-base leading-none" aria-hidden="true">
           {flagEmoji(c.code)}
          </span>
          <span className="flex-1 truncate font-medium">{c.name}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex-shrink-0">+{c.dial}</span>
          {selected && <Check className="w-4 h-4 flex-shrink-0" />}
         </button>
        </li>
       );
      })}
     </ul>
    </div>
   )}
  </div>
 );
}
