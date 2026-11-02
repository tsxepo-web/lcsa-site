export function Icon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d={path} />
    </svg>
  );
}

export function St({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" />
    </svg>
  );
}

export function Gn({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l9 4v6c0 5.5-3.8 9.7-9 11-5.2-1.3-9-5.5-9-11V6l9-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export const Oe = () => (
  <Icon path="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20" />
);
export const qe = () => (
  <Icon path="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.6 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
);
export const Er = () => <Icon path="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />;
export const gn = () => (
  <Icon path="M12 2l9 4v6c0 5.5-3.8 9.7-9 11-5.2-1.3-9-5.5-9-11V6l9-4zM9 12l2 2 4-4" />
);
