import { Avatar, SectionTitle, SectionTitleContainer } from "../../styles";
import { MoreButton } from "../moreButton";
import { AvatarContainer, AvatarsContainer, Container, Name, Role } from "./styles";

import Avatar1 from "../../assets/avatar1.svg";
import Avatar2 from "../../assets/avatar2.svg";
import Avatar3 from "../../assets/avatar3.svg";
import Avatar4 from "../../assets/avatar4.svg";
import Avatar5 from "../../assets/avatar5.svg";

type memberProps =
	{
		id: number;
		avatar: string;
		name: string;
		role: string;
	}

const cMembers: memberProps[] = [
	{ id: 1, avatar: Avatar1, name: "Norton", role: "Admin" },
	{ id: 2, avatar: Avatar2, name: "Nariya", role: "Full Acess" },
	{ id: 3, avatar: Avatar3, name: "Riya", role: "Full Acess" },
	{ id: 4, avatar: Avatar4, name: "Dad", role: "Full Acess" },
	{ id: 5, avatar: Avatar5, name: "Mom", role: "Full Acess" },
];

export function Members() {

	return (
		<Container>
			<SectionTitleContainer>
				<SectionTitle>Members</SectionTitle>
				<MoreButton />
			</SectionTitleContainer>
			<AvatarsContainer>

				{
					cMembers.map(member => (
						<AvatarContainer key={member.id}>
							<Avatar src={member.avatar} alt="Avatar" />
							<Name>{member.name}</Name>
							<Role>{member.role}</Role>
						</AvatarContainer>
					))
				}

			</AvatarsContainer>
		</Container>
	);
}