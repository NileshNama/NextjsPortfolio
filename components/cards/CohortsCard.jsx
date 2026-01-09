export default function CohortCard({ title, description, link, tag }) {
  return (
    <a
      href={link}
      className="border rounded-xl p-5 hover:shadow-md transition block"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{title}</h3>
        {tag && (
          <span className="text-xs text-[#509187] border border-[#509187] px-2 py-0.5 rounded-full">
            {tag}
          </span>
        )}
      </div>

      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </a>
  );
}
