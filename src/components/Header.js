import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CampaignIcon from '@mui/icons-material/Campaign';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import ChecklistIcon from '@mui/icons-material/Checklist';

export function Header() {
	const location = useLocation();
	const { pathname } = location;

	return (
		<header>
			<nav>
				<Link to="/" className={pathname === '/' ? 'active' : ''}>
					<CampaignIcon className="logo" />
					State Protest Rights
				</Link>
				<Link to="/avoiding-surveillance" className={pathname === '/avoiding-surveillance' ? 'active' : ''}>
					<VideocamOffIcon className="logo" />
					Avoiding Surveillance
				</Link>
				<Link to="/checklist" className={pathname === '/checklist' ? 'active' : ''}>
					<ChecklistIcon className="logo" />
					Prep Checklist
				</Link>
			</nav>
		</header>
	);
}
