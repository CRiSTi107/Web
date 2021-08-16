import { useRouter } from "next/router";

// domain.com/quizzes/[quizId]

function QuizPage() {

  const router = useRouter();

  const quizId = router.query.quizId;

  return <h1>The Quiz page - {quizId}</h1>;
}

export default QuizPage;
