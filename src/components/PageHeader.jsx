const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="sticky top-16 z-40 bg-white border-b py-6 px-4">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {subtitle && (
        <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default PageHeader;
