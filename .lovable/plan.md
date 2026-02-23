

# Newsletter Signup Section

## What Changes
Add a newsletter signup section at the bottom of the Blog page where visitors can enter their email to subscribe. Since there is no backend connected, the form will store the email in `localStorage` as a simple client-side record and show a success toast using the existing `sonner` toast system. This gives a fully working UI that can later be wired to a real backend (e.g. Supabase, Mailchimp) when ready.

## Modified File

### `src/pages/Blog.tsx`

Add a newsletter signup block after the blog post list (before `</main>` closes):

- A styled container using `brutal-border brutal-shadow-primary` with a `bg-card` background
- Heading: "STAY UPDATED" with the site's monospace badge style
- Short description: "Get notified when I publish new posts."
- A horizontal form with:
  - An email input using the existing `brutal-input` class
  - A submit button using the existing `brutal-btn` class with a `Mail` icon from lucide-react
- On submit:
  - Validate email format with a simple regex check
  - Save to `localStorage` under a `newsletter_subscribers` key (array of emails)
  - Show a success toast via `sonner`'s `toast()` function (already installed)
  - Clear the input field
  - If already subscribed, show an info toast instead
- Input validation: trim whitespace, enforce max 255 characters, validate email format -- consistent with the existing contact form constraints

## Technical Details

- No new files or dependencies needed
- Uses `sonner` toast (already imported in the app via `src/components/ui/sonner.tsx`)
- Email validation uses a standard regex pattern
- `localStorage` acts as a placeholder store; easily replaceable with a Supabase table or external API later
- The section is placed inside the existing `max-w-4xl` container for consistent alignment

