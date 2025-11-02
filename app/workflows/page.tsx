import WorkflowCard, { WorkflowItem } from "./workflow-card";

export default function Workflows() {
  const workflowItems: WorkflowItem[] = [
    {
      title: "Deal situation overview",
      description: "Summarize core details of a deal, including transaction type, target profile, client's objectives, and milestones.",
      link: "/workflows/deal-situation-overview",
      img: "/deal-situation-overview-illustration.svg"
    },
    {
      title: "Due diligence",
      description: "Automate preliminary diligence by extracting insights from provided VDR/ folder.",
      link: "/workflows/due-diligence",
      img: "/due-diligence-illustration.svg"
    },
    {
      title: "Target/buyer list",
      description: "Create lists of potential buyers or targets based on specified criteria from internal database and data providers.",
      link: "/workflows/target-buyer-list",
      img: "/target-buyer-list-illustration.svg"
    },
    {
      title: "Documents bulk extraction",
      description: "Process large volumes of deal materials (CIMs, FS, management presentations) to extract structured data points.",
      link: "/workflows/documents-bulk-extraction",
      img: "/documents-bulk-extraction-illustration.svg"
    },
    {
      title: "Real-time CRM update",
      description: "Auto-update internal CRM systems with key buyer interactions, deal statuses, and pipeline updates with newly processed documents or feedback.",
      link: "/workflows/real-time-crm-update",
      img: "/real-time-crm-update-illustration.svg"
    },
    {
      title: "CIM storyline & slide layout",
      description: "Draft CIM storylines and corresponding slide layouts based on the target's profile and deal thesis in firm-specific styles.",
      link: "/workflows/cim-storyline-slide-layout",
      img: "/cim-storyline-slide-layout-illustration.svg"
    },
    {
      title: "Strip profiles (PowerPoint)",
      description: "Overviews of buyers/targets universe, pulling key facts (e.g., description, financials, ownership, strategic fits) and populating company logos and HQ flags.",
      link: "/workflows/strip-profiles",
      img: "/strip-profiles-illustration.svg"
    },
    {
      title: "Company profiles (PowerPoint)",
      description: "Create a one-pager incorporating the selected sections, with appropriate icon enhancements for each section to improve visual clarity and engagement.",
      link: "/workflows/company-profiles",
      img: "/company-profiles-illustration.svg"
    },
    {
      title: "Excel tables extractions",
      description: "Extract all relevant financial figures and operating metrics from the given material, in Excel with required formats.",
      link: "/workflows/excel-tables-extractions",
      img: "/excel-tables-extractions-illustration.svg"
    }
  ];

  return (
    <div className="relative w-full h-[calc(100vh-128px)] overflow-scroll">
      <div className="grid grid-cols-3 p-4 gap-4 w-full">
        {workflowItems.map((item) => (
          <WorkflowCard key={item.link} item={item} />
        ))}
      </div>
      <div className="sticky bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  )
}