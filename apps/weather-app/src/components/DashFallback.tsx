import React from 'react';
import { LocationInterface } from '../app/common/utilities';

export default function DashFallback({
  location,
}: {
  location: LocationInterface;
}) {
  return <div>SideBarFallback</div>;
}
