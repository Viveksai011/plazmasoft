import {
  CheckCircle,
  X,
  Clock,
  SquareChartGantt,
  CircleDollarSign,
  Headset,
  Target,
  Phone,
  Logs,
  Building2,
} from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="w-full mx-auto p-6">
      <div className="flex justify-center items-center  px-6 py-4 ">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          <span className="text-customBg">Krishly</span> vs the competitors
        </h2>
      </div>

      <div className="overflow-x-auto w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg ">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-6 min-w-[250px] text-xl py-4 font-bold border-r">
                <Logs className="inline-block w-5 h-5 mr-2 " />
                Feature
              </th>
              <th className="px-6 min-w-[250px] text-xl py-4 font-bold text-customBg border-r">
                <SquareChartGantt className="inline-block w-5 h-5 mr-2 " />
                Krishly
              </th>
              <th className="px-6 min-w-[250px] text-xl py-4 font-bold ">
                <Building2 className="inline-block w-5 h-5 mr-2 " /> Other
                Companies
              </th>
            </tr>
          </thead>
          <tbody className="text-[#444]">
            {/* Row */}
            <tr className="border-t">
              <td className="px-6 min-w-[250px] py-4 border-r font-semibold">
                <Clock className="inline-block w-5 h-5 mr-2 text-lg " />{" "}
                Response Time{" "}
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-green-600 bg-green-300/15 font-medium">
                4 hours guaranteed{" "}
                <CheckCircle className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-red-600 bg-red-300/15">
                2–5 business days{" "}
                <X className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-6 min-w-[250px] py-4 border-r font-semibold">
                <SquareChartGantt className="inline-block w-5 h-5 mr-2 text-lg" />
                Project Limit
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-green-600 bg-green-300/15 font-medium">
                Max 5 active projects{" "}
                <CheckCircle className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-red-600 bg-red-300/15">
                20+ simultaneous{" "}
                <X className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-6 min-w-[250px] py-4 border-r font-semibold">
                <CircleDollarSign className="inline-block w-5 h-5 mr-2 text-lg" />
                Pricing Model
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-green-600 bg-green-300/15 font-medium">
                Fixed price, no surprises{" "}
                <CheckCircle className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-red-600 bg-red-300/15">
                Hourly + scope creep{" "}
                <X className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-6 min-w-[250px] py-4 border-r font-semibold">
                <Headset className="inline-block w-5 h-5 mr-2 text-lg" />
                Post-Launch Support
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-green-600 bg-green-300/15 font-medium">
                90 days included + training{" "}
                <CheckCircle className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-red-600 bg-red-300/15">
                Extra cost maintenance{" "}
                <X className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-6 min-w-[250px] py-4 border-r font-semibold">
                <Target className="inline-block w-5 h-5 mr-2 text-lg" />
                Success Guarantee
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-green-600 bg-green-300/15 font-medium">
                ROI guarantee or free work{" "}
                <CheckCircle className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-red-600 bg-red-300/15">
                No guarantees{" "}
                <X className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-6 min-w-[250px] py-4 border-r font-semibold">
                <Phone className="inline-block w-5 h-5 mr-2 text-lg" />
                Communication
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-green-600 bg-green-300/15 font-medium">
                Direct developer access{" "}
                <CheckCircle className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
              <td className="px-6 min-w-[250px] py-4 border-r text-red-600 bg-red-300/15">
                Account managers & tickets{" "}
                <X className="inline-block ml-1 text-lg h-5 w-5" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
