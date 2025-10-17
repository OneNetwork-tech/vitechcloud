"use client";
import Link from 'next/link';
import {useState} from 'react';

type Item={href:string;label:string};
type Props={brand:string;nav:Item[];
    cta:Item;localeSwitch:Item};
    export default function HeaderBase({brand,nav,cta,localeSwitch}:Props){const[open,setOpen]=useState(false);return(<header className='sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b'>
        <div className='mx-auto max-w-[93rem] px-8 h-20 flex items-center justify-between'>
            <Link href={nav[0]?.href?.startsWith('/sv')?'/sv/':'/en/'} 
            className='flex items-center gap-2'>
                <img src='/logo.png' alt={brand} className='h-12 w-12 md:h-14 md:w-14'/>
            <span className='font-semibold'>{brand}</span></Link><nav className='hidden md:flex items-center gap-6 text-sm'>
                {nav.map(n=><Link key={n.href} href={n.href} className='hover:text-brand.primary'>{n.label}</Link>)}<Link href={cta.href} className='px-4 py-2 rounded-md bg-brand.primary text-white hover:opacity-90'>{cta.label}</Link><Link href={localeSwitch.href} className='text-gray-600 hover:text-brand.primary'>{localeSwitch.label}</Link></nav><button aria-label='Open menu' className='md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border' onClick={()=>setOpen(v=>!v)}><svg width='22' height='22' viewBox='0 0 24 24' fill='none'><path d='M4 6h16M4 12h16M4 18h16' stroke='currentColor' strokeWidth='2' strokeLinecap='round'/></svg></button></div>{open&&<div className='md:hidden border-t bg-white'><nav className='mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2'>{nav.map(n=><Link key={n.href} href={n.href} className='py-2' onClick={()=>setOpen(false)}>{n.label}</Link>)}<Link href={cta.href} className='mt-2 px-4 py-2 rounded-md bg-brand.primary text-white w-fit' onClick={()=>setOpen(false)}>{cta.label}</Link><Link href={localeSwitch.href} className='py-2 text-gray-600' onClick={()=>setOpen(false)}>{localeSwitch.label}</Link></nav></div>}</header>)}