## Govita Project Guide

This guide documents the project structure, generic component patterns, page locations (home, about, contact, blogs, products), API integration flows, and how to work with constants.

### Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: SCSS modules + Tailwind utilities
- **HTTP**: axios

### Project Structure (high-level)
- `src/app` — App Router pages and layouts
  - `(main)` — Public site routes: `about`, `blogs`, `contact-us`, `products`, `service`
  - `dashboard` — Admin dashboard pages: `blogs`, `products`
- `src/components` — Feature components grouped by domain (home, blogs, products, services, etc.)
- `src/common/assets` — Fonts, icons, images, SCSS

### Pages and Locations
- **Home**: `src/components/home/index.jsx` used by `src/app/page.js`
- **About**: `src/app/(main)/about/page.jsx` uses `src/components/about/about.component.jsx` and `about.constant.js`
- **Contact**: `src/app/(main)/contact-us/page.jsx` uses `src/components/contact/contact.component.jsx`
- **Blogs**:
  - List: `src/app/(main)/blogs/page.jsx` using `src/components/blogs/blogs.component.jsx`
  - Detail: `src/app/(main)/blogs/[id]/page.jsx` using `src/components/blog-detail/blog-detail.component.jsx`
  - Hook: `src/components/blogs/use-blog.hook.js` (fetches blogs)
- **Products**:
  - List: `src/app/(main)/products/page.jsx` with `src/components/products/products.component.jsx`
  - Detail: `src/app/(main)/products/[id]/page.jsx` with `src/components/productsDetails/productsDetails.component.jsx`
  - Dashboard: `src/app/dashboard/products/page.jsx` with `src/components/dashboard-components/products/*`

### Environment Variables
Create `.env.local` with:
```
NEXT_PUBLIC_BACKEND_URL=https://your-api.example.com
```

### Constants: Where and How
- Home constants: `src/components/home/home.constant.js`
  - Exports `HOME_SERVICES`, `WHAT_WE_DO`
- Service constants: `src/components/services/service.constant.js`
  - Exports `SERVICES`, `TESTIMONIALS`
- About constants: `src/components/about/about.constant.js`
  - Exports `ABOUT_STEPS`

Usage pattern:
```js
import { HOME_SERVICES } from "@/components/home/home.constant";
```

Keep constants as serializable data (strings, numbers, image imports) without side-effects.

### Generic Component Patterns
- Prefer dumb/presentational components that receive data via props.
- Keep data fetching inside hooks or page-level components.
- Reuse UI atoms: buttons, cards located in `src/common/components` or `src/common/...` (e.g., `button`, `card`).

Example (generic list renderer):
```jsx
export function GridList({ items, renderItem, className }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className || ""}`}>
      {items?.map((item, idx) => (
        <div key={item.id || idx}>{renderItem(item, idx)}</div>
      ))}
    </div>
  );
}
```

### API Integration

Expected API response for list:
```json
[
  {
    "_id": "...",
    "title": "Post title",
    "thumbnail": "https://...",
    "content": "<p>html</p>",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Products (Dashboard and Public)
- Admin component: `src/components/dashboard-components/products/products.component.jsx`
  - GET: `/api/products?page={n}` → sets `products` and `pagination`
  - POST: `/api/products` → add
  - PUT: `/api/products/:id` → edit
  - DELETE: `/api/products/:id` → remove

Pagination shape (expected):
```json
{
  "data": {
    "products": [ { "_id": "...", "name": "...", "status": "Active" } ],
    "pagination": { "currentPage": 1, "totalPages": 3, "totalProducts": 60, "hasNextPage": true, "hasPrevPage": false }
  }
}
```

Public products pages should fetch by slug or id similarly via `${NEXT_PUBLIC_BACKEND_URL}/api/products/:id`.

### Making Components Generic (Data-Driven)
To convert a section to a generic component:
1. Move static arrays into a constants file or fetch from API.
2. Create a presentational component that accepts props like `items`, `title`, `description`.
3. Keep formatting (icons/images) driven by data (e.g., pass image src, labels).

Example:
```jsx
export function FeaturesSection({ title, subtitle, features }) {
  return (
    <section>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <article key={i} className="p-6 border rounded-lg">
            {f.icon}
            <h3 className="font-semibold mt-3">{f.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{f.des}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

Use it with constants or API data and also same for banner hero section:
```jsx
import { WHAT_WE_DO } from "@/components/home/home.constant";

<FeaturesSection title="What we do" features={WHAT_WE_DO} />
```

### Conventions
- Keep API base URL in `NEXT_PUBLIC_BACKEND_URL`.
- Centralize shared types/shapes (if added later) in a `types.ts` or `types.js`.
- Avoid business logic inside UI components; isolate in hooks or services.

### Adding a New Section
1. Create constants file if static, or a hook/service if dynamic.
2. Build a generic presentational component.
3. Compose in the page under `src/app/.../page.jsx`.

### Troubleshooting
- If API calls fail, check `.env.local` and browser console/network tab.
- Ensure CORS is configured on the backend.


### SEO: metadata and generateMetadata

Next.js App Router supports static and dynamic metadata.

- Static (per page):
```jsx
// src/app/(main)/about/page.jsx
export const metadata = {
  title: "About | Govita",
  description: "About Govita — who we are and what we do.",
};

export default function AboutPage() { /* ... */ }
```

- Dynamic (per dynamic route): use `generateMetadata`.
Typical for blogs/products where title/description come from the API.

```jsx
// src/app/(main)/blogs/[id]/page.jsx
import axios from "axios";

export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`);
    const title = data?.title ? `${data.title} | Blog | Govita` : "Blog | Govita";
    const description = data?.excerpt || data?.summary || "Read our latest blog post.";
    const ogImage = data?.thumbnail;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: ogImage ? [{ url: ogImage }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ogImage ? [ogImage] : undefined,
      },
    };
  } catch (_) {
    return { title: "Blog | Govita", description: "Read our latest blog post." };
  }
}

export default async function BlogDetailsPage({ params }) { /* ... */ }
```

Products dynamic metadata follows the same pattern:
```jsx
// src/app/(main)/products/[id]/page.jsx
import axios from "axios";

export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id}`);
    const name = data?.name || data?.productName;
    const title = name ? `${name} | Products | Govita` : "Products | Govita";
    const description = data?.shortDescription || data?.description || "Product details.";
    const ogImage = data?.image || data?.thumbnail;
    return {
      title,
      description,
      openGraph: { title, description, images: ogImage ? [{ url: ogImage }] : undefined },
    };
  } catch (_) {
    return { title: "Products | Govita", description: "Explore our products." };
  }
}
```

You can also define app-wide defaults in `src/app/layout.js` using `export const metadata`.
These are merged with page-level metadata:
```jsx
// src/app/layout.js
export const metadata = {
  title: {
    default: "Govita",
    template: "%s | Govita",
  },
  description: "Govita — marketing and product solutions.",
  metadataBase: new URL("https://www.your-domain.com"),
};
```


