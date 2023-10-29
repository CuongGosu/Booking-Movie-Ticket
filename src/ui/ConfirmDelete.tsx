import Button from './Button';

interface ConfirmDeleteProps {
  resourceName: string;
  onConfirm: () => void;
  disabled: boolean;
  onCloseModal?: () => void;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}) => {
  return (
    <div className="w-40rem gap-1.2rem flex flex-col">
      <h3 className="text-2xl font-bold">Xóa {resourceName}</h3>
      <p className="text-grey-500 mb-1.2rem">
        Bạn có chắc chắn xóa phim {resourceName}? Hành động này không thể hoàn
        tác lại
      </p>

      <div className="flex justify-end gap-5">
        <button
          className="rounded-2xl border-solid bg-white p-2 px-4 text-gray-800"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Hủy
        </button>
        <Button type="default" disabled={disabled} onClick={onConfirm}>
          Xóa
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
