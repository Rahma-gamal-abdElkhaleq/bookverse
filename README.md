#  BookVerse

**Discover Your Next Favorite Book** — a React-based book discovery platform that lets users search millions of books, view detailed information, and save personal favorites tied to their account.

🔗 **Live Demo:** [bookverse-ldpc.vercel.app](https://bookverse-ldpc.vercel.app)

---

##  Features

- **Book Search** — Search millions of books via the Google Books API, with pagination ("Load More") and result count tracking.
- **Book Details Page** — Author, category, publisher, publish date, page count, language, and rating for each book.
- **User Authentication** — Sign up and log in securely with email/password using Firebase Authentication.
- **Cloud-Synced Favorites** — Save favorite books to your account via Cloud Firestore. Favorites persist across devices and sessions — log in from anywhere and your list is there.
- **Guest Mode** — Users who aren't logged in can still save favorites locally in their browser (`localStorage`), with no account required.
- **Responsive Design** — Fully responsive layout across desktop, tablet, and mobile.
- **Resilient API Handling** — Automatic retry logic with exponential backoff for transient `503` errors from the Google Books API, so temporary rate-limiting doesn't break the user experience.
- **Curated Sections** — Trending categories and featured authors to help users discover books without needing to search.

---

##  Tech Stack

**Frontend**
- React 19 (Hooks, Context API)
- React Router v7
- Bootstrap 5
- Boxicons

**Backend / Services**
- Firebase Authentication (Email/Password)
- Cloud Firestore (per-user favorites storage)

**API**
- Google Books API

**Deployment**
- Vercel (CI/CD via GitHub integration)

---

##  Notable Technical Decisions

- **Custom `useFavorites` hook** — abstracts away *where* favorites are stored (Firestore for logged-in users, `localStorage` for guests), so components like `Home` and `Favorites` don't need to know the difference.
- **Retry logic with backoff** — the Google Books free-tier API occasionally returns `503 Service Unavailable` under load. Instead of surfacing an error immediately, failed requests are retried up to 3 times with increasing delay before falling back to a user-facing message.
- **Race-condition safe fetching** — search requests use an `AbortController` and an `ignore` flag so that stale responses (from a previous search term or page) never overwrite newer results.

---

##  Running Locally

\`\`\`bash
# Clone the repository
git clone https://github.com/Rahma-gamal-abdElkhaleq/bookverse.git
cd bookverse

# Install dependencies
npm install

# Add environment variables (see below), then run
npm start
\`\`\`

### Environment Variables

Create a `.env` file in the project root with:

\`\`\`
REACT_APP_GOOGLE_BOOKS_API_KEY=your_google_books_api_key
\`\`\`

Firebase configuration is included directly in `src/firebase.js` (safe to expose client-side; access is protected via Firestore/Auth security rules, not by hiding the config).

---

##  Notes

- This is a front-end focused portfolio project. There is no custom backend server — authentication and data persistence are handled by Firebase as a backend-as-a-service.
- Occasional search delays are due to Google Books API rate-limiting on its free tier, not the application itself; retry logic is in place to minimize user impact.
