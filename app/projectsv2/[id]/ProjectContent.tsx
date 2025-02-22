'use client';

import Image from "next/image";
import React from "react";

export interface BlockContent {
    type?: string;
    text?: string;
    checked?: boolean;
    icon?: string;
    url?: string;
}

export default function ProjectContent({ content }: { content: BlockContent[] }) {
    return (
        <div className="prose dark:prose-invert max-w-none">
            {content.map((block, index) => {
                if (block?.type === 'image') {
                    return (
                        <div key={index} className="max-w-[100vw] relative">
                            <div className="relative aspect-video w-full mb-2">
                                <Image 
                                    src={block?.url || ''}
                                    alt="Project image"
                                    fill
                                    sizes="100vw"
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                            </div>
                        </div>
                    );
                }

                return (
                    <div key={index} className="px-16 text-gray-700 dark:text-gray-300">
                        {(() => {
                            switch (block?.type) {
                                case 'paragraph':
                                    return block?.text === '' ? (<br className="my-6" />) : (<p className="my-6 ">{block?.text}</p>);
                                case 'heading_1':
                                    return <h1 className="text-2xl font-bold mt-12 mb-6">{block?.text}</h1>;
                                case 'heading_2':
                                    return <h2 className="text-xl font-bold mt-10 mb-6">{block?.text}</h2>;
                                case 'heading_3':
                                    return <h3 className="text-lg font-bold mt-8 mb-4">{block?.text}</h3>;
                                case 'bulleted_list_item':
                                    return <ul className="my-6 "><li className="ml-4 font-semibold bullet-list-item">{block?.text}</li></ul>;
                                case 'numbered_list_item':
                                    return <ol className="my-6"><li className="ml-4 bullet-list-item">{block?.text}</li></ol>;
                                case 'to_do':
                                    return (
                                        <div className="flex items-center gap-2 my-4">
                                            <input 
                                                type="checkbox" 
                                                checked={block.checked} 
                                                readOnly 
                                                className="h-4 w-4"
                                            />
                                            <span>{block?.text}</span>
                                        </div>
                                    );
                                case 'toggle':
                                    return (
                                        <details className="cursor-pointer my-6">
                                            <summary className="font-semibold">{block?.text}</summary>
                                        </details>
                                    );
                                case 'callout':
                                    return (
                                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex items-start gap-3 my-8">
                                            {block?.icon && <span>{block?.icon}</span>}
                                            <div className="">{block?.text}</div>
                                        </div>
                                    );
                                case 'quote':
                                    return (
                                        <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8 italic">
                                            {block?.text}
                                        </blockquote>
                                    );
                                default:
                                    return null;
                            }
                        })()}
                    </div>
                );
            })}
        </div>
    );
} 