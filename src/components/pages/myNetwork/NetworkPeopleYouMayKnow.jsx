import { useSelector } from "react-redux"
import NetworkProfileCard from "./NetworkProfilesCard"
import { Card, Row } from "react-bootstrap"
import { useState, useMemo } from "react"

function NetworkPeopleYouMayKnow() {
  const profiles = useSelector((rs) => rs.profilo.usersData) || []
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const followed = useSelector((rs) => rs.network.followed) || []

  const [shuffledProfiles] = useState(() => {
    if (!profiles.length) return []
    return [...profiles].sort(() => Math.random() - 0.5)
  })

  const suggestedProfiles = useMemo(() => {
    const followedIds = new Set(followed.map((f) => f._id || f))

    const nonFollowed = shuffledProfiles.filter(
      (profile) => !followedIds.has(profile._id),
    )

    return nonFollowed.slice(0, 12)
  }, [shuffledProfiles, followed])

  return (
    <Card className="p-2 shadow-sm rounded-3">
      <Card.Title className="fs-6">Persone che potresti conoscere</Card.Title>
      <Card.Body className="p-0">
        <Row className="g-2">
          {suggestedProfiles.map((profile) => (
            <NetworkProfileCard key={profile._id} profile={profile} />
          ))}
        </Row>
      </Card.Body>
    </Card>
  )
}

export default NetworkPeopleYouMayKnow
