import React from 'react';

interface PropsUser {}

const User: React.FC<PropsUser> = () => {
  return (
    <div className="mx-auto h-full bg-white">
      <div className="container mx-auto xl:w-1170">Page for User</div>
    </div>
  );
};

export default User;
