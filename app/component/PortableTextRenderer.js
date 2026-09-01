import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const components = {
    block: {
        h1: ({ children }) => (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-12 mb-6 tracking-tight leading-tight">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-12 mb-5 tracking-tight leading-snug pt-4 border-b border-gray-100 pb-3">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-4 tracking-tight leading-snug">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="text-base sm:text-lg lg:text-[19px] text-gray-700 leading-relaxed lg:leading-8 mb-6 font-normal">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-green-500 bg-green-50/60 pl-6 pr-4 py-4 my-8 rounded-r-xl text-gray-800 italic font-medium text-base sm:text-lg border-y border-r border-green-100/60 shadow-xs">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-outside ml-6 mb-6 space-y-2.5 text-gray-700 text-base sm:text-lg leading-relaxed">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-outside ml-6 mb-6 space-y-2.5 text-gray-700 text-base sm:text-lg leading-relaxed">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="pl-1.5">{children}</li>,
        number: ({ children }) => <li className="pl-1.5">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
        em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
        code: ({ children }) => (
            <code className="bg-gray-100 text-green-700 px-2 py-0.5 rounded text-sm font-mono border border-gray-200/80">
                {children}
            </code>
        ),
        underline: ({ children }) => <span className="underline decoration-green-500 decoration-2 underline-offset-4">{children}</span>,
        'strike-through': ({ children }) => <span className="line-through text-gray-400">{children}</span>,
        link: ({ value, children }) => {
            const target = value?.blank ? '_blank' : undefined;
            const rel = value?.blank ? 'noopener noreferrer' : undefined;
            return (
                <a
                    href={value?.href}
                    target={target}
                    rel={rel}
                    className="text-green-600 font-medium underline underline-offset-4 hover:text-green-700 transition-colors"
                >
                    {children}
                </a>
            );
        },
    },
    types: {
        image: ({ value }) => {
            if (!value) return null;
            const imageUrl = value?.asset ? urlForImage(value)?.url() : value?.url;
            if (!imageUrl) return null;
            return (
                <figure className="my-10 overflow-hidden rounded-2xl shadow-md border border-gray-100">
                    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px]">
                        <Image
                            src={imageUrl}
                            alt={value.alt || 'Blog content image'}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {value.caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-3 italic px-4 py-1">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
        table: ({ value }) => {
            if (!value || !value.rows || value.rows.length === 0) return null;
            const hasMultipleRows = value.rows.length > 1;
            const headerRow = hasMultipleRows ? value.rows[0] : null;
            const bodyRows = hasMultipleRows ? value.rows.slice(1) : value.rows;

            return (
                <div className="my-8 sm:my-10 w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                        {headerRow && (
                            <thead className="bg-gray-50/90 border-b border-gray-200">
                                <tr>
                                    {headerRow.cells?.map((cell, idx) => (
                                        <th
                                            key={idx}
                                            className="px-4 py-3.5 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-r last:border-r-0 border-gray-200/60"
                                        >
                                            {cell}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                        )}
                        <tbody className="divide-y divide-gray-100">
                            {bodyRows.map((row, rIdx) => (
                                <tr key={row._key || rIdx} className="hover:bg-gray-50/60 transition-colors">
                                    {row.cells?.map((cell, cIdx) => (
                                        <td
                                            key={cIdx}
                                            className="px-4 py-3.5 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-700 leading-relaxed border-r last:border-r-0 border-gray-100 font-normal"
                                        >
                                            {cell}
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
    if (!value) return null;
    return <PortableText value={value} components={components} />;
}
