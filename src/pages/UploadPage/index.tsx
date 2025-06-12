import React, { useState, useEffect } from 'react';
import { FileUploader } from '../../components/FileUploader';

type FilesState = {
  house: { file: File | null; preview: string | null };
  animal: { file: File | null; preview: string | null };
  selfPortrait: { file: File | null; preview: string | null };
};

const UploadPage = () => {
  const [files, setFiles] = useState<FilesState>({
    house: { file: null, preview: null },
    animal: { file: null, preview: null },
    selfPortrait: { file: null, preview: null },
  });

  const handleFileSelect = (name: keyof FilesState, selectedFile: File) => {
    if (files[name].preview) {
      URL.revokeObjectURL(files[name].preview!);
    }

    setFiles((prev) => ({
      ...prev,
      [name]: {
        file: selectedFile,
        preview: URL.createObjectURL(selectedFile),
      },
    }));
  };

  useEffect(() => {
    return () => {
      Object.values(files).forEach((item) => {
        if (item.preview) {
          URL.revokeObjectURL(item.preview);
        }
      });
    };
  }, [files]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '24px',
        padding: '40px',
      }}
    >
      <FileUploader
        id="house"
        label="Дом, дерево, человек"
        previewUrl={files.house.preview}
        onFileSelect={(file) => handleFileSelect('house', file)}
      />
      <FileUploader
        id="animal"
        label="Несуществующее животное"
        previewUrl={files.animal.preview}
        onFileSelect={(file) => handleFileSelect('animal', file)}
      />
      <FileUploader
        id="selfPortrait"
        label="Автопортрет"
        previewUrl={files.selfPortrait.preview}
        onFileSelect={(file) => handleFileSelect('selfPortrait', file)}
      />
    </div>
  );
};

export default UploadPage;
