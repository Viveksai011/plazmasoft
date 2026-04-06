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
    <section className="mx-auto w-full p-6">
      <div className="flex items-center justify-center px-6 py-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl">
          <span className="text-customBg">Krishly</span> vs the competitors
        </h2>
      </div>

      <div className="mx-auto w-full max-w-5xl overflow-x-auto rounded-2xl bg-white shadow-lg">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="min-w-[250px] border-r px-6 py-4 text-xl font-bold">
                <Logs className="mr-2 inline-block h-5 w-5" />
                Feature
              </th>
              <th className="min-w-[250px] border-r px-6 py-4 text-xl font-bold text-customBg">
                <SquareChartGantt className="mr-2 inline-block h-5 w-5" />
                Krishly
              </th>
              <th className="min-w-[250px] px-6 py-4 text-xl font-bold">
                <Building2 className="mr-2 inline-block h-5 w-5" /> Other Companies
              </th>
            </tr>
          </thead>
          <tbody className="text-[#444]">
            {/* Row */}
            <tr className="border-t">
              <td className="min-w-[250px] border-r px-6 py-4 font-semibold">
                <Clock className="mr-2 inline-block h-5 w-5 text-lg" /> Response Time{" "}
              </td>
              <td className="min-w-[250px] border-r bg-green-300/15 px-6 py-4 font-medium text-green-600">
                4 hours guaranteed <CheckCircle className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
              <td className="min-w-[250px] border-r bg-red-300/15 px-6 py-4 text-red-600">
                2–5 business days <X className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="min-w-[250px] border-r px-6 py-4 font-semibold">
                <SquareChartGantt className="mr-2 inline-block h-5 w-5 text-lg" />
                Project Limit
              </td>
              <td className="min-w-[250px] border-r bg-green-300/15 px-6 py-4 font-medium text-green-600">
                Max 5 active projects <CheckCircle className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
              <td className="min-w-[250px] border-r bg-red-300/15 px-6 py-4 text-red-600">
                20+ simultaneous <X className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="min-w-[250px] border-r px-6 py-4 font-semibold">
                <CircleDollarSign className="mr-2 inline-block h-5 w-5 text-lg" />
                Pricing Model
              </td>
              <td className="min-w-[250px] border-r bg-green-300/15 px-6 py-4 font-medium text-green-600">
                Fixed price, no surprises{" "}
                <CheckCircle className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
              <td className="min-w-[250px] border-r bg-red-300/15 px-6 py-4 text-red-600">
                Hourly + scope creep <X className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="min-w-[250px] border-r px-6 py-4 font-semibold">
                <Headset className="mr-2 inline-block h-5 w-5 text-lg" />
                Post-Launch Support
              </td>
              <td className="min-w-[250px] border-r bg-green-300/15 px-6 py-4 font-medium text-green-600">
                90 days included + training{" "}
                <CheckCircle className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
              <td className="min-w-[250px] border-r bg-red-300/15 px-6 py-4 text-red-600">
                Extra cost maintenance <X className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="min-w-[250px] border-r px-6 py-4 font-semibold">
                <Target className="mr-2 inline-block h-5 w-5 text-lg" />
                Success Guarantee
              </td>
              <td className="min-w-[250px] border-r bg-green-300/15 px-6 py-4 font-medium text-green-600">
                ROI guarantee or free work{" "}
                <CheckCircle className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
              <td className="min-w-[250px] border-r bg-red-300/15 px-6 py-4 text-red-600">
                No guarantees <X className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="min-w-[250px] border-r px-6 py-4 font-semibold">
                <Phone className="mr-2 inline-block h-5 w-5 text-lg" />
                Communication
              </td>
              <td className="min-w-[250px] border-r bg-green-300/15 px-6 py-4 font-medium text-green-600">
                Direct developer access{" "}
                <CheckCircle className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
              <td className="min-w-[250px] border-r bg-red-300/15 px-6 py-4 text-red-600">
                Account managers & tickets <X className="ml-1 inline-block h-5 w-5 text-lg" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
