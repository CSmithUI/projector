export type User = {
  _id: Number;
  firstName: String;
  lastName: String;
  projects: Project[];
  bio: String;
  website: String;
};

export type Project = {
  id: Number;
  projName: String;
  projDateAdded: String;
  projDescription: String;
  projImages: String[];
};

export const users: User = {
  _id: 1,
  firstName: 'James',
  lastName: 'Smith',
  projects: [
    {
      id: 1,
      projName: 'Robot Arm',
      projDateAdded: 'June 11, 2023',
      projDescription:
        'An amzing project to build a robot, using 3-d printing, arduinos, servers, and C++',
      projImages: ['img1, img2'],
    },
    {
      id: 2,
      projName: 'E-bike',
      projDateAdded: 'April 05, 2023',
      projDescription: 'An awesome electric cargo bike project',
      projImages: ['img1, img2'],
    },
    {
      id: 3,
      projName: 'Dog food deispenser',
      projDateAdded: 'June 11, 2023',
      projDescription:
        'An amzing project to build a robot, using 3-d printing, arduinos, servers, and C++',
      projImages: ['img1, img2'],
    },
    {
      id: 4,
      projName: 'Robot Arm part 2',
      projDateAdded: 'June 11, 2023',
      projDescription:
        'An amzing project to build a robot, using 3-d printing, arduinos, servers, and C++',
      projImages: ['img1, img2'],
    },
  ],
  bio: "I'm a maker of things and a builder of other things.",
  website: 'http://christophercarsonsmith.com',
};
