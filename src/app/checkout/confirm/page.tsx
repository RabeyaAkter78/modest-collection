export default function ConfirmPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 text-center">
      <div className="mb-6 text-left">
        <a href="/" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
          Back
        </a>
      </div>
      <h1 className="text-2xl font-semibold">Order Confirmed</h1>
      <p className="mt-3 text-zinc-600">
        Thank you for your order. You will receive a confirmation shortly.
      </p>
      <a
        href="/"
        className="mt-6 inline-block rounded-md bg-zinc-900 px-5 py-3 text-sm text-white"
      >
        Continue Shopping
      </a>
    </div>
  );
}
