import FolderInfo from '@/components/FolderInfo';
import SearchBar from '@/components/SearchBar';
import LinkList from '@/components/LinkList';
import { useCallback, useEffect, useState } from 'react';
import { getFolder } from '@/services/api';
import style from '@/styles/Main.module.css';
import useAsync from '@/hooks/useAsync';

interface FolderInfoProp {
  name: string;
  owner?: {
    name: string;
    profileImageSource: string;
  };
}

interface LinkShared {
  id: number;
  title: string;
  url: string;
  createdAt: string;
  created_at: string;
  imageSource: string;
  image_source: string;
}

export default function Shared() {
  const [linkList, setLinkList] = useState<LinkShared[]>([]);
  const [folderInfo, setFolderInfo] = useState<FolderInfoProp>({
    name: '',
    owner: {
      name: '',
      profileImageSource: '',
    },
  });
  const asyncGetFolder = useAsync(getFolder);

  const apiGetFolder = useCallback(async () => {
    const result = await asyncGetFolder();
    if (!result) return;

    const { folder } = result;
    const { links, name, owner } = folder;
    setFolderInfo({ name, owner });
    setLinkList([...links]);
  }, [asyncGetFolder]);

  useEffect(() => {
    apiGetFolder();
  }, [apiGetFolder]);

  return (
    <main className={style.main}>
      <FolderInfo name={folderInfo.name} owner={folderInfo.owner} />
      <div className={style.mainContent}>
        <SearchBar />
        <LinkList linkList={linkList} />
      </div>
    </main>
  );
}
