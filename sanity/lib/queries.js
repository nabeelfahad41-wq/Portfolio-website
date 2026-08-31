import { groq } from 'next-sanity';

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    category->{
      title,
      "slug": slug.current
    },
    author->{
      name,
      image,
      "slug": slug.current
    }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body,
    seoTitle,
    metaDescription,
    focusKeyword,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    noindex,
    category->{
      title,
      "slug": slug.current
    },
    author->{
      name,
      image,
      bio,
      "slug": slug.current
    }
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;
