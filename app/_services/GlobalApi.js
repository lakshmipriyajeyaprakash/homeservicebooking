import { request, gql } from "graphql-request";
const MASTER_URL = `https://api-ca-central-1.hygraph.com/v2/${process.env.NEXT_PUBLIC_MASTER_URL_KEY}/master`;

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        id
        name
        bgColor {
          hex
        }
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        name
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
const getBusinessByCategory = async (category) => {
  const query =
    gql`
    query BusinessCategory {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        images {
          url
        }
        name
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
const getBusinessById = async (infoId) => {
  const query =
    gql`
    query GetBusinessId {
      businessList(where: { id: "` +
    infoId +
    `" }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        images {
          url
        }
        name
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
const createNewSchedule = async (businessId, date, time, email, username) => {
  const mutationQuery =
    gql`
    mutation createBooking {
      createBooking(
        data: {
          scheduleStatus: Scheduled
          businessList: { connect: { id: "` +
    businessId +
    `" } }
          date: "` +
    date +
    `"
          email: "` +
    email +
    `"
          time: "` +
    time +
    `"
          userName: "` +
    username +
    `"}
      ) {
        id
        businessList {
          address
          images {
            url
          }
          name
        }
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
const getBookedSlot = async (businessId, datebooked) => {
  const query =
    gql`
    query ScheduledSlot {
      bookings(where: { businessList: { id: "` +
    businessId +
    `" }, 
      date:"` +
    datebooked +
    `" }) 
      {
        time
        date
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
const getUserScheduleHistory = async (userEmail) => {
  const query = gql`
    query getUserScheduleHistory {
      bookings(
        where: { email: "lakshmijeyaprakash97@gmail.com" }
        orderBy: publishedAt_DESC
      ) {
        businessList {
          address
          name
          images {
            url
          }
          contactPerson
          id
        }
        time
        date
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewSchedule,
  getBookedSlot,
  getUserScheduleHistory,
};
