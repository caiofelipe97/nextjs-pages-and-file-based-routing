import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/eventDetail/EventContent";
import EventLogistics from "../../components/eventDetail/EventLogistics";
import EventSummary from "../../components/eventDetail/EventSummary";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
