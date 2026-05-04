export const SectionHeader = ({
  title,
  action,
}: {
  title: string;
  action?: string;
}) => (
  <div className="mb-3 mt-6 flex items-center justify-between px-4">
    <h2 className="text-base font-semibold tracking-tight">{title}</h2>
    {action && (
      <button className="text-xs font-medium text-primary hover:underline">
        {action}
      </button>
    )}
  </div>
);

export default SectionHeader;