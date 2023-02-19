export default function AgendaLayout({ children }) {
  return (
    <div className="w-screen h-screen flex justify-center dark:bg-gray-900">
      <div className="container flex flex-col justify-center px-8 lg:px-60 my-24 space-y-2">
        {children}
      </div>
    </div>
  );
}