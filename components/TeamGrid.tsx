import Image from "next/image";
import Link from "next/link";
import { team } from "@/lib/team";

export default function TeamGrid() {
  return (
    <div className="team-list">
      {team.map((member) => (
        <article key={member.name} className="team-member">
          <div className="team-member__image">
            <Image
              src={member.image || "/images/logo.png"}
              alt={member.name}
              
              width={145}
              height={145}
              className="team-member__img"
              
            />
          </div>

          <div className="team-member__content">
            <h2 className="team-member__name">{member.name}</h2>
            <p className="team-member__role"><strong>{member.role}</strong></p>
            <p className="team-member__bio">{member.bio}</p>

            {member.linkedin && (
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="team-member__link"
              >
                LinkedIn
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}