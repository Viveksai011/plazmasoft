const Tips = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Tips for Better Results</h3>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2 text-purple-500">•</span>
          <span>Be specific about your target audience, tone, and format</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-purple-500">•</span>
          <span>Include relevant context and background information</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-purple-500">•</span>
          <span>Mention any specific requirements or constraints</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-purple-500">•</span>
          <span>Specify the desired length or depth of the response</span>
        </li>
      </ul>
    </div>
  );
};

export default Tips;
