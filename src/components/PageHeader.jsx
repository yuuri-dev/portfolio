const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="border-b py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {subtitle && (
        <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default PageHeader;
