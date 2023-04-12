import Image from "next/image";

const ProfileImage = ({ image }) => {
  return (
    <div className="flex justify-center items-center flex-col p-2 bg-white rounded-full">
      <Image
        src={image}
        alt="photo_url"
        className="scale-125 mt-3 rounded-full"
        width={100}
        height={100}
      />

      <div className="mt-20 p-0">
        <svg
          width="132"
          height="383"
          viewBox="0 0 132 383"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99379 343.775C1.59835 334.975 0.166494 323.109 0 318.275V315.275V22.7755C0 22.7755 11.1734 20.3542 65.4322 6.77549C103.393 -2.72452 129.466 0.675457 131.863 0.275457V187.276V317.775C131.863 321.109 131.164 329.675 128.367 337.275C124.871 346.775 122.373 350.775 117.378 357.775C112.384 364.775 100.396 373.275 92.4043 376.775C84.4126 380.275 75.4219 382.775 61.9359 382.275C48.4498 381.775 40.9576 377.275 34.4643 374.275C27.971 371.275 18.4809 362.775 15.484 358.775C12.4871 354.775 11.4881 354.775 5.99379 343.775Z"
            fill="#3B054F"
          />
          <path
            d="M5.99379 343.775C1.59835 334.975 0.166494 323.109 0 318.275V315.275V59.2755C0 59.2755 13.486 54.7755 63.9338 70.7755C84.7217 77.3686 129.466 83.1755 131.863 82.7755V187.276V317.775C131.863 321.109 131.164 329.675 128.367 337.275C124.871 346.775 122.373 350.775 117.378 357.775C112.384 364.775 100.396 373.275 92.4043 376.775C84.4126 380.275 75.4219 382.775 61.9359 382.275C48.4498 381.775 40.9576 377.275 34.4643 374.275C27.971 371.275 18.4809 362.775 15.484 358.775C12.4871 354.775 11.4881 354.775 5.99379 343.775Z"
            fill="#218E8A"
          />
          <path
            d="M5.99379 343.775C1.59834 334.975 0.166494 323.109 0 318.275V315.275V154.58C77 135 130.449 113.199 131.863 112.475V187.276V317.775C131.863 321.109 131.164 329.675 128.367 337.275C124.871 346.775 122.373 350.775 117.378 357.775C112.384 364.775 100.396 373.275 92.4043 376.775C84.4126 380.275 75.4219 382.775 61.9359 382.275C48.4498 381.775 40.9576 377.275 34.4643 374.275C27.971 371.275 18.4809 362.775 15.484 358.775C12.4871 354.775 11.4881 354.775 5.99379 343.775Z"
            fill="#FEB538"
          />
          <path
            d="M5.99379 343.775C1.59834 334.975 0.166494 323.109 0 318.275V315.275V203.056C0.332989 202.723 1.56498 202.435 2.9969 202.275C5.32782 202.109 10.7888 201.775 13.9855 201.775C17.9814 201.775 21.9772 201.275 22.9762 201.275C23.7754 201.275 30.6349 200.609 33.9648 200.275C36.9617 199.942 43.5549 199.175 45.9524 198.775C48.3499 198.375 59.6049 196.609 64.9328 195.775L85.911 192.275L105.89 189.275C111.551 188.609 123.073 187.275 123.872 187.275C124.671 187.275 129.533 186.942 131.863 186.775V187.275V317.775C131.863 321.109 131.164 329.675 128.367 337.275C124.871 346.775 122.373 350.775 117.378 357.775C112.384 364.775 100.396 373.275 92.4043 376.775C84.4126 380.275 75.4219 382.775 61.9359 382.275C48.4498 381.775 40.9576 377.275 34.4643 374.275C27.971 371.275 18.4809 362.775 15.484 358.775C12.4871 354.775 11.4881 354.775 5.99379 343.775Z"
            fill="#FF7200"
          />
          <path
            d="M5.99379 343.775C1.59834 334.975 0.166494 323.109 0 318.275V315.275V249.775C0.332989 249.442 1.29866 248.575 2.49741 247.775C3.99586 246.775 6.99276 246.775 8.99069 246.775C10.9886 246.775 14.485 247.775 18.9803 249.275C23.4757 250.775 37.9607 257.775 38.9597 258.275C39.9586 258.775 59.4384 268.775 60.9369 269.775C62.4353 270.775 81.9152 280.275 82.9141 280.775C83.9131 281.275 92.4043 284.775 94.9017 285.775C97.3991 286.775 107.389 289.775 108.887 290.275C110.386 290.775 116.879 291.775 120.875 292.275C124.072 292.675 129.533 292.238 131.863 291.97V317.775C131.863 321.109 131.164 329.675 128.367 337.275C124.871 346.775 122.373 350.775 117.378 357.775C112.384 364.775 100.396 373.275 92.4043 376.775C84.4126 380.275 75.4219 382.775 61.9359 382.275C48.4498 381.775 40.9576 377.275 34.4643 374.275C27.971 371.275 18.4809 362.775 15.484 358.775C12.4871 354.775 11.4881 354.775 5.99379 343.775Z"
            fill="#E12A62"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProfileImage;
