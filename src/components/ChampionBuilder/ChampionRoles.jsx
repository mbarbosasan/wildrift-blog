export const ChampionRoles = ({ roles }) => {
  const basePath =
    "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champion-details/global/default";

  return (
    <div className="ml-4 flex items-center gap-2">
      {roles &&
        roles.map((role, index) => {
          return (
            <img
              key={index}
              src={`${basePath}/role-icon-${role}.png`}
              alt={role}
              width="30"
              height="30"
            />
          );
        })}
    </div>
  );
};
