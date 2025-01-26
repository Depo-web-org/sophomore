import React, { useState } from 'react';
import GoBack from '../../../components/GoBack';
import { Link, useLocation, useParams } from 'react-router-dom';
import SubmitUnitsModel from './components/SubmitUnitsModel';
import { useSelector } from 'react-redux';
import { useGetTeacherCoursesQuery } from '../../../../../../../Redux/data/getDataApiSlice';
import { useTranslation } from 'react-i18next';
import { FaPlusCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useDeleteTeacherCourseContentMutation } from '../../../../../../../Redux/data/postDataApiSlice';
import { ImSpinner9 } from 'react-icons/im';

const ItemsUnit = () => {
  const { t, i18n } = useTranslation();
  const [modelOpen, setModelOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false); // State for delete modal
  const [selectedContentId, setSelectedContentId] = useState(null); // Store the ID of the content to delete
  const location = useLocation();
  const { courseID } = useParams();
  const [deleteTeacherContent, { refetch ,isLoading:deleteCourseLoading}] = useDeleteTeacherCourseContentMutation();
  const { data, isLoading, isFetching, isError } = useGetTeacherCoursesQuery();
const [messageDelete, setMessageDelete] = useState()
  const selectedCourse = data?.data.filter((course) => course.id === courseID)[0];

  // Handle delete confirmation
  const handleDeleteConfirmation = (id) => {
    setSelectedContentId(id); // Set the ID of the content to delete
    setDeleteModalOpen(true); // Open the delete confirmation modal
  };

  // Handle actual deletion
  const handleDelete = async () => {
    if (selectedContentId) {
      const formData = {
        id: selectedContentId,
      };
      await deleteTeacherContent(formData).unwrap().then(()=>{
        if(!deleteCourseLoading){
          setDeleteModalOpen(false); // Close the modal
          setSelectedContentId(null); // Reset the
        }
      }).then((res)=>{
console.log(res)
      })
      refetch(); 
    }
   

  };

  // Handle cancel deletion
  const handleCancelDelete = () => {
    setDeleteModalOpen(false); // Close the modal
    setSelectedContentId(null); // Reset the selected content ID
  };

  return (
    <>
      <div className="w-full">
        <GoBack
          title={
            location.pathname.split('/')[3] === 'editUnit'
              ? 'Edit Lessons'
              : t('actions.chooseLessons')
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 my-8 w-full">
          {selectedCourse?.contents?.length === 0 ? (
            <>
              <div className="bg-mainGray bg-opacity-80 text-white h-32 rounded-lg font-semibold flex justify-center items-center text-center">
                <p>
                  {i18n.languages[0] === 'ar'
                    ? 'ﻻ يوجد دروس مضافة'
                    : 'Empty there is no lessons added'}
                </p>
              </div>
              <div className="hover:scale-105 duration-150 transition-all text-white h-32 rounded-lg font-semibold flex justify-center items-center">
                <Link
                  state={{ selectedCourse }}
                  to={`/teacherPanel/courses/${selectedCourse?.id}`}
                  className="h-full w-full flex items-center justify-center"
                >
                  <FaPlusCircle className="mx-2" />
                  {i18n.languages[0] === 'ar' ? 'أضف درس' : 'Add Lesson'}
                </Link>
              </div>
            </>
          ) : (
            selectedCourse?.contents?.map((i, index) => {
              return (
                <div
                  key={i + index}
                  className="bg-mainGray relative hover:bg-primary duration-200 transition-all text-white h-32 rounded-lg font-semibold px-2"
                >
                  <Link
                    state={{ selectedCourse, lesson: index }}
                    to={`/teacherPanel/courses/EditLessons/lesson/${i.id}`}
                    className="h-full w-full flex items-center justify-center text-center text-sm xl:text-base"
                  >
                    {i.title}
                    {i.price === '0.00' && (
                      <div className="absolute top-1 start-2 bg-green-600 text-white rounded-xl p-1 text-xs px-2">
                        {i18n.languages[0] === 'ar' ? 'مجانية' : 'Free'}
                      </div>
                    )}
                  </Link>

                  <div
                    className="absolute top-1 end-2 bg-red-600 text-white rounded-xl text-base p-1 z-20 hover:scale-[150%] cursor-pointer"
                    onClick={() => handleDeleteConfirmation(i.id)} // Open delete confirmation modal
                  >
                    <MdDelete />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Delete Confirmation Modal */}
        <DeleteConfirmationModal
          isOpen={deleteModalOpen}
          onConfirm={handleDelete}
          onCancel={handleCancelDelete}
          message={t('deleteConfirmation.message')}
          i18n={i18n}
          deleteCourseLoading={deleteCourseLoading}
        />

        {/* Submit Button (Optional) */}
        {/* <div className="w-full flex items-center justify-end">
          <button
            onClick={() => setModelOpen(true)}
            className="bg-primary py-2 px-10 text-white rounded-md"
          >
            Submit All
          </button>
        </div> */}
        {modelOpen && <SubmitUnitsModel setModelOpen={setModelOpen} />}
      </div>
    </>
  );
};

export default ItemsUnit;
export const DeleteConfirmationModal = ({ isOpen, onConfirm, onCancel, message,i18n ,deleteCourseLoading}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
           

          {i18n.languages[0] === 'ar' ? 'تأكيد الحذف' : 'Confirm Deletion'}
        </h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            onClick={onCancel}
          >
            {i18n.languages[0] === 'ar' ? 'إلغاء' : 'Cancel'}

          </button>
          <button
            className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary hover:bg-opacity-90"
            onClick={onConfirm}
            disabled={deleteCourseLoading}
          >
            {       deleteCourseLoading?<ImSpinner9 className="animate-spin text-3xl text-white " />: i18n.languages[0] === 'ar' ? 'حذف' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};