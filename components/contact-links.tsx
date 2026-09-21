import { contacts } from "@/lib/site";

type ContactLinksProps = {
  className?: string;
  compact?: boolean;
};

export function ContactLinks({ className, compact = false }: ContactLinksProps) {
  return (
    <ul className={className}>
      {contacts.map((contact) => (
        <li key={contact.email}>
          <a
            href={`mailto:${contact.email}`}
            className="text-muted-foreground hover:text-starlight text-sm transition-colors"
          >
            {compact ? (
              contact.email
            ) : (
              <>
                <span className="text-foreground/80">{contact.label}</span>
                <span className="text-muted-foreground"> · {contact.email}</span>
              </>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
