import { CarouselPhotos, ScheduleItem } from '@/shared/types/types';
import photo1 from '@/shared/assets/ui/carousel/photo1.png';
import photo2 from '@/shared/assets/ui/carousel/photo2.png';

export const schedulesTab1: Array<ScheduleItem> = [
  { data: '25 Nov 2016', description: 'Vestibulum viverra' },
  { data: '28 Nov 2016', description: 'Vestibulum viverra' },
  { data: '', description: '' },
  { data: '18 Dec 2016', description: 'Vestibulum viverra' },
  { data: '', description: '' },
  { data: '7 Jan 2017', description: 'Vestibulum viverra' },
];

export const schedulesTab2: Array<ScheduleItem> = [
  { data: '17 Nov 2016', description: 'Vestibulum viverra' },
  { data: '', description: '' },
  { data: '13 Dec 2016', description: 'Vestibulum viverra' },
  { data: '28 Dec 2016', description: 'Vestibulum viverra' },
  { data: '', description: '' },
  { data: '9 Feb 2017', description: 'Vestibulum viverra' },
];

export const historyContent = `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet architecto, consequuntur distinctio dolor dolores ducimus esse exercitationem,
          iusto mollitia nostrum pariatur praesentium quibusdam reiciendis similique tenetur
          ullam veniam! Adipisci alias amet animi beatae consectetur enim facere ipsam
          laboriosam libero modi nulla optio praesentium quos repellendus, sint tempora vero
          voluptas voluptate?
`;

export const climbContent = `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet architecto, consequuntur distinctio dolor dolores ducimus esse exercitationem,
          iusto mollitia nostrum pariatur praesentium quibusdam reiciendis similique tenetur
          ullam veniam!
`;

export const carouselPhotos: Array<CarouselPhotos> = [
  { id: '0', src: photo1, alt: 'photo1' },
  { id: '1', src: photo2, alt: 'photo2' },
  { id: '2', src: photo1, alt: 'photo3' },
  { id: '3', src: photo2, alt: 'photo4' },
];
