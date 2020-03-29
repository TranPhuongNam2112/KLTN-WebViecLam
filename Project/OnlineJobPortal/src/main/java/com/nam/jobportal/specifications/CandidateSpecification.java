package com.nam.jobportal.specifications;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.nam.jobportal.models.Candidate;

public class CandidateSpecification implements Specification<Candidate> {
	private Candidate filter;

    public CandidateSpecification(Candidate filter) {
        super();
        this.filter = filter;
    }
	 
    public Predicate toPredicate(Root<Candidate> root, CriteriaQuery<?> cq,
            CriteriaBuilder cb) {

        Predicate p = cb.disjunction();

        if (filter.() != null) {
            p.getExpressions()
                    .add(cb.equal(root.get("name"), filter.getName()));
        }

        if (filter.getSurname() != null && filter.getAge() != null) {
            p.getExpressions().add(
                    cb.and(cb.equal(root.get("surname"), filter.getSurname()),
                            cb.equal(root.get("age"), filter.getAge())));
        }

        return p;
    }

}
