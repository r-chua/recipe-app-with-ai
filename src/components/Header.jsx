import chefClaudeLogo from "/images/chef-claude-icon.png";

export default function Header() {
    return (
        <header className="nav-bar">
            <img src={chefClaudeLogo} alt="Chef Claude Icon" className="chef-icon" />
            <span className="chef-claude-title">Chef Claude</span>
        </header>
    )
}