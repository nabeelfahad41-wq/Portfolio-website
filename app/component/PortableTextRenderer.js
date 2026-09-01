import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const components = {
    block: {
        h1: ({ children }) => (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-12 mb-6 tracking-tight leading-tight">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-12 mb-5 tracking-tight leading-snug pt-4 border-b border-white/10 pb-3">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-10 mb-4 tracking-tight leading-snug">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="text-base sm:text-lg lg:text-[19px] text-gray-200 leading-relaxed lg:leading-8 mb-6 font-normal">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#43A047] bg-[#43A047]/20 pl-6 pr-4 py-4 my-8 rounded-r-xl text-gray-100 italic font-medium text-base sm:text-lg border-y border-r border-[#43A047]/40 shadow-xs">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-outside ml-6 mb-6 space-y-2.5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-outside ml-6 mb-6 space-y-2.5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="pl-1.5">{children}</li>,
        number: ({ children }) => <li className="pl-1.5">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
        em: ({ children }) => <em className="italic text-gray-100">{children}</em>,
        code: ({ children }) => (
            <code className="bg-white/10 text-[#66BB6A] px-2 py-0.5 rounded text-sm font-mono border border-white/20">
                {children}
            </code>
        ),
        underline: ({ children }) => <span className="underline decoration-[#66BB6A] decoration-2 underline-offset-4">{children}</span>,
        'strike-through': ({ children }) => <span className="line-through text-gray-400">{children}</span>,
        link: ({ value, children }) => {
            const target = value?.blank ? '_blank' : undefined;
            const rel = value?.blank ? 'noopener noreferrer' : undefined;
            const href = value?.href || '#';
            return (
                <a
                    href={href}
                    target={target}
                    rel={rel}
                    className="text-[#66BB6A] font-semibold underline underline-offset-4 hover:text-white transition-colors"
                >
                    {children}
                </a>
            );
        },
    },
    types: {
        image: ({ value }) => {
            if (!value) return null;
            let imageUrl = null;
            try {
                imageUrl = value?.asset ? urlForImage(value)?.url() : value?.url;
            } catch (e) {
                imageUrl = value?.url || null;
            }
            if (!imageUrl) return null;
            return (
                <figure className="my-10 overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-white/5">
                    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px]">
                        <Image
                            src={imageUrl}
                            alt={value.alt || 'Blog article illustration'}
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 768px"
                            quality={80}
                            className="object-cover"
                        />
                    </div>
                    {value.caption && (
                        <figcaption className="text-center text-sm text-gray-300 mt-3 italic px-4 py-1">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
        table: ({ value }) => {
            if (!value || !Array.isArray(value.rows) || value.rows.length === 0) return null;
            const hasMultipleRows = value.rows.length > 1;
            const headerRow = hasMultipleRows ? value.rows[0] : null;
            const bodyRows = hasMultipleRows ? value.rows.slice(1) : value.rows;

            return (
                <div className="my-8 sm:my-10 w-full overflow-x-auto rounded-2xl border border-white/20 shadow-xl bg-white/[0.05]">
                    <table className="w-full text-left border-collapse min-w-[500px]" aria-label="Data table">
                        {headerRow && (
                            <thead className="bg-white/15 border-b border-white/20">
                                <tr>
                                    {Array.isArray(headerRow.cells) &&
                                        headerRow.cells.map((cell, idx) => (
                                            <th
                                                key={idx}
                                                scope="col"
                                                className="px-4 py-3.5 sm:px-6 sm:py-4 text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider border-r last:border-r-0 border-white/20"
                                            >
                                                {typeof cell === 'object' ? JSON.stringify(cell) : String(cell || '')}
                                            </th>
                                        ))}
                                </tr>
                            </thead>
                        )}
                        <tbody className="divide-y divide-white/15">
                            {bodyRows.map((row, rIdx) => (
                                <tr key={row._key || rIdx} className="hover:bg-white/10 transition-colors">
                                    {Array.isArray(row.cells) &&
                                        row.cells.map((cell, cIdx) => (
                                            <td
                                                key={cIdx}
                                                className="px-4 py-3.5 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-200 leading-relaxed border-r last:border-r-0 border-white/15 font-normal"
                                            >
                                                {typeof cell === 'object' ? JSON.stringify(cell) : String(cell || '')}
                                            </td>
                                        ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        },
    },
};

export default function PortableTextRenderer({ value }) {
    if (!value || !Array.isArray(value)) return null;
    return <PortableText value={value} components={components} />;
}
