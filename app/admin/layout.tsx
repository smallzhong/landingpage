export default function AdminLayout({ children }) {
  return (
    <div className="container flex flex-col justify-center px-8 lg:px-60 my-24 space-y-2 prose dark:prose-invert">
      {children}
    </div>
  );
}