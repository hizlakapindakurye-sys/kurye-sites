interface ServiceCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ name, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg border-2 border-blue-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 flex flex-col group">
      <div className="mb-4 text-blue-600 group-hover:text-blue-700 transition">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 text-blue-900 group-hover:text-blue-700 transition">{name}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
