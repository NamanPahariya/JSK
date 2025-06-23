// src/components/MegaMenu1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';

export default function MegaMenu1({onMenuItemClick}) {
  const navigate = useNavigate();

  const menuItems = [
    {
      section: 'Services',
      items: [
        { label: 'Web Development', path: '/detailservices/web-development' },
        { label: 'Mobile App Development', path: '/detailservices/mobile-app-development' },
        { label: 'E-commerce Development', path: '/detailservices/e-commerce-development' },
        { label: 'Enterprise Solution', path: '/detailservices/enterprise-solution' },
        { label: 'Data Analytics', path: '/detailservices/data-anayltics' },
        { label: 'Cloud Computing Services', path: '/detailservices/cloud-computing-services' },
        { label: 'Quality Assurance', path: '/detailservices/quality-assurance' },
        { label: 'Project Consulting and Advisory', path: '/detailservices/project-consulting-and-advisory' },
        { label: 'APIs and Integration', path: '/detailservices/apis-and-integration' },
        { label: 'DevOps', path: '/detailservices/devops' },
        { label: 'UI/UX Solution', path: '/detailservices/ui-ux-solution' },
      ],
    },
    {
      section: 'Platforms',
      items: [
        {  path: '/detailservices/aws', src:'https://swift-technologies.com/swift/wp-content/uploads/2021/06/aws.png' },
        {  path: '/detailservices/hcl', src:'https://swift-technologies.com/swift/wp-content/uploads/2021/06/hcl.png' },
        {  path: '/detailservices/ibm', src:'https://swift-technologies.com/swift/wp-content/uploads/2021/06/ibm.png' },
        {  path: '/detailservices/adobe', src:'https://swift-technologies.com/swift/wp-content/uploads/2021/06/Path-161.png' },
        {  path: '/detailservices/microsoft', src:'https://swift-technologies.com/swift/wp-content/uploads/2021/06/microsoft.png' },
        {  path: '/detailservices/google', src:'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
      ],
    },
    {
      section: 'Industries',
      items: [
        { label: 'Staff Augmentation', path: '/detailservices/staff-augmentation' },
        { label: 'Recruitment Service', path: '/detailservices/recruitment-service' },
        { label: 'Automotive', path: '/detailservices/automotive' },
        { label: 'Banking & Finance', path: '/detailservices/banking-finance' },
        { label: 'Healthcare', path: '/detailservices/healthcare' },
        { label: 'Retail', path: '/detailservices/retail' },
        { label: 'Travel', path: '/detailservices/travel' },
      ],
    },
  ];

  const handleMenuItemClick = (path) => {
    navigate(path);
    if (onMenuItemClick) {
      onMenuItemClick();
    }
  };

  return (
    <div className="absolute top-auto z-[99] min-w-[200px] pt-3">
      <div className="w-full rounded-lg bg-white-a700_02 p-5 shadow-5xl">
        <div className="flex gap-[30px]">
          {menuItems.map((group) => (
            <div key={group.section} className="flex flex-col items-start gap-4 sm:gap-4">
              <Text className="text-xl font-extrabold !text-[#1F514C] sm:text-[15px]">
                {group.section}
              </Text>
              <div className="flex flex-col items-start gap-3 sm:gap-3">
                {group.items.map(({ label, path,src }) => (
                  <button
                    key={path}
                    onClick={() => handleMenuItemClick(path)}
                    className="text-left text-xl font-normal !text-black-600 sm:text-[13px] hover:underline"
                  >
                   {group.section === 'Platforms' ? (
                      <img src={src} alt="platform" className="w-10 h-10 object-contain" />
                    ) : (
                      <Text className="text-xl font-normal !text-black-600 sm:text-[13px]">
                        {label}
                      </Text>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
