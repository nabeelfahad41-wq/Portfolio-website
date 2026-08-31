import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const components = {
    block: {
        h1: ({ children }) => (
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-10 mb-5 tracking-tight">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3 tracking-tight">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-3">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-2">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 font-normal">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-green-600 bg-green-50/70 pl-6 py-4 my-8 rounded-r-lg text-gray-800 italic font-medium text-lg shadow-xs">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-700 text-base md:text-lg">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-700 text-base md:text-lg">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="pl-1">{children}</li>,
        number: ({ children }) => <li className="pl-1">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
        em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
        code: ({ children }) => (
            <code className="bg-gray-100 text-green-700 px-2 py-0.5 rounded text-sm font-mono border border-gray-200">
                {children}
            </code>
        ),
        underline: ({ children }) => <span className="underline decoration-green-500 decoration-2">{children}</span>,
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
                    <div className="relative w-full h-[320px] md:h-[480px]">
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
    },
};

export default function PortableTextRenderer({ value }) {
    if (!value) return null;
    return <PortableText value={value} components={components} />;
}
