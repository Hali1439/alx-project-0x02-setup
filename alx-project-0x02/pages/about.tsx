import React from 'react';
import { ButtonProps } from '@/interfaces';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage: React.FC<{}> = () => {
  const handleClick = () => alert('Button clicked!');

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to the About page</h1>
      <div className="space-x-4">
        <Button label="Small Rounded" size="small" shape="rounded-sm" onClick={handleClick} children={null} />
        <Button label="Medium Rounded" size="medium" shape="rounded-md" onClick={handleClick} children={null} />
        <Button label="Large Rounded" size="large" shape="rounded-full" onClick={handleClick} children={null} />
      </div>
    </main>
  );
};

export default AboutPage;
