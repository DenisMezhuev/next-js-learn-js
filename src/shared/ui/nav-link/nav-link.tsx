import {SNavLink} from "@/src/shared/ui/nav-link/nav-link.styles";

export const NavLink = ({url, text, isActive = false}:{url: string, text: string, isActive?: boolean})=><SNavLink  href={url} $isActive={isActive}>{text}</SNavLink>