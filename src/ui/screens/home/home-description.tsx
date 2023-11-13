import { ibmPlexMono } from '@/lib/fonts';

export default function HomeDescription() {
  return (
    <p
      className={`text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-tight ${ibmPlexMono.className} font-normal`}
    >
      Теперь вы точно сможете найти своих единомышленников для своих IT идей
    </p>
  );
}
