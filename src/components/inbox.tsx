import React from 'react';

interface InboxNotificationsProps {
  count: number;
}

const InboxNotifications: React.FC<InboxNotificationsProps> = ({ count }) => {
  return (
    <div className="relative">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Inbox
      </button>
      {count > 0 && (
        <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs px-1">
          {count}
        </span>
      )}
    </div>
  );
};

export default InboxNotifications;