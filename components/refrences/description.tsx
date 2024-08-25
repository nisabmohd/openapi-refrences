export default function Description() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-medium">Get all users</h3>
      <p>Retrieve a list of all users.</p>
      <div className="mt-3 flex flex-col gap-6">
        <Options
          items={[
            {
              datatype: "integer",
              title: "limit",
              default: "10",
              description: "Maximum number of users to return",
              required: true,
            },
            {
              datatype: "integer",
              title: "offset",
              description:
                "Number of users to skip before starting to collect the result set",
            },
          ]}
          title="Query Parameters"
          description="Query params filter for getting all users"
        />
        <Options
          items={[
            {
              datatype: "string",
              title: "id",
              required: true,
            },
            {
              datatype: "string",
              title: "name",
              required: true,
            },
            {
              datatype: "string",
              title: "email",
              required: true,
            },
            {
              datatype: "string",
              title: "role",
            },
          ]}
          title="Request Body"
          datatype="application/json"
          description="User object that needs to be added"
        />
      </div>
    </div>
  );
}

type OptionsProps = {
  title: string;
  datatype?: string;
  description?: string;
  items: {
    title: string;
    required?: boolean;
    datatype: string;
    default?: string;
    description?: string;
  }[];
};

function Options({ title, items, datatype, description }: OptionsProps) {
  return (
    <div className="text-sm w-full">
      <div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="font-medium text-primary">{title}</span>{" "}
          <span className="font-code text-[13px]">{datatype}</span>
        </div>
        <div className="text-muted-foreground text-[13px] my-1">
          {description}
        </div>
      </div>
      <div className="flex flex-col mt-2">
        {items.map((item) => (
          <div className="border-t py-2 flex flex-col gap-1" key={item.title}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-primary font-medium">{item.title}</span>
              {item.required && <span className="text-red-500">Required</span>}
              <span className="font-code text-[13px]">{item.datatype}</span>
              {item.default && <span>{`default: ${item.default}`}</span>}
            </div>
            <div className="text-[13px] text-muted-foreground">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
