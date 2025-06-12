import React, { useRef } from 'react';
import styles from './css/index.module.scss';
import cn from 'classnames';

import UploadIcon from '../../assets/icons/upload.svg';
import ReplaceIcon from '../../assets/icons/replace.svg';

type FileUploaderProps = {
  id: string;
  label: string;
  previewUrl: string | null;
  onFileSelect: (file: File) => void;
  className?: string;
};

export const FileUploader: React.FC<FileUploaderProps> = ({
  id,
  label,
  previewUrl,
  onFileSelect,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const uploaderStyle = previewUrl
    ? { backgroundImage: `url(${previewUrl})` }
    : {};

  return (
    <div className={cn(styles.wrapper, className)}>
      <div
        className={styles.uploaderBox}
        style={uploaderStyle}
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        <input
          ref={inputRef}
          type="file"
          id={id}
          className={styles.hiddenInput}
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/jpg, application/pdf"
        />

        {previewUrl ? (
          <div className={styles.previewOverlay}>
            <img
              src={ReplaceIcon}
              alt="Заменить файл"
              className={styles.icon}
            />
          </div>
        ) : (
          <div className={styles.defaultContent}>
            <img
              src={UploadIcon}
              alt="Загрузить файл"
              className={styles.icon}
            />
          </div>
        )}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
};
