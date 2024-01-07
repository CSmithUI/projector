//import * as React from 'react';
import { User, users } from '../data.ts';

const data: User = users;

export interface IUserProfileProps {}

export default function UserProfile(props: IUserProfileProps) {
  return (
    <div>
      <h2 className='text-2xl font-normal'>
        {data.firstName} {data.lastName}
      </h2>
      <p className='mt-6'>{data.bio}</p>
      <p>
        <a
          href='#'
          className='
          mt-6 
          text-lime-200 
          hover:text-lime-500 
          hover:underline '
        >
          {data.website}
        </a>
      </p>
      <div>
        <ul>
          {data.projects.map((project) => (
            <li>
              <a href='#' key='project.id'>
                {project.projName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
